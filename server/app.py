from flask import Flask

app = Flask(__name__, instance_relative_config=True, static_url_path='',
                  static_folder='../web')

global model
model = None

@app.route("/getSimWords/<string:word>/")
def get_sim_words(word):
    global model

    sim = model.wv.most_similar(positive=[word], topn=6)
    print(sim)    

    return jsonify(result=sim)

@app.route("/setWVFile", methods=['POST'])
def set_wv_file():
    global model
    # TODO: check file
    print(request.json)
    fn = request.json['file']
    wv_type = request.json['type']
    if wv_type=='glove':
        model = load_glove(fn)
    elif wv_type=='gensim':
        model = Word2Vec.load(fn)
    else:
        print('Unknown type of word vector, not loaded!')

    print('loaded')

    result = {}
    result['dim'] = model.vector_size
    result['voc'] = len(model.wv.vocab)

    print(result)
    return jsonify(result)
    
if __name__ == "__main__":
    app.run(debug=True)
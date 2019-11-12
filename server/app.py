from flask import Flask, request, jsonify

from gensim.test.utils import datapath, get_tmpfile
from gensim.models import KeyedVectors, Word2Vec
from gensim.scripts.glove2word2vec import glove2word2vec


app = Flask(__name__, instance_relative_config=True, static_url_path='',
            static_folder='../web')

global model
model = None


def load_glove(fn):
    # glove_file = datapath('G:/env/glove/glove.6B/glove.6B.100d.txt')
    glove_file = datapath(fn)
    tmp_file = get_tmpfile("test_word2vec.txt")
    _ = glove2word2vec(glove_file, tmp_file)
    model = KeyedVectors.load_word2vec_format(tmp_file)
    return model


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
    if wv_type == 'glove':
        model = load_glove(fn)
    elif wv_type == 'gensim':
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

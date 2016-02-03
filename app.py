from flask import Flask,render_template
app_lulu = Flask(__name__)

tokens = { 'TAIL_THIS_VERSION':'?ver=1.0.4'}

@app_lulu.route('/')
def index_lulu():
    return render_template('index.html', tokens = tokens)

if __name__ == "__main__":
    app_lulu.run(debug=True, port=5003)

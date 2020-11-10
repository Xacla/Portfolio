FROM python:3.8

ADD ./src .
ADD requirements.txt .

RUN pip install -r requirements.txt

CMD gunicorn flask_api:app -b 127.0.0.1:5000    
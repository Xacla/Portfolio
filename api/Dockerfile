FROM python:3.8

ADD ./src .
ADD requirements.txt .

RUN pip install -r requirements.txt

CMD gunicorn flask_api:app -b 0.0.0.0:5000
#!/bin/bash

echo "== Rodando migrações no Render =="
python manage.py migrate --noinput

echo "== Subindo servidor =="
gunicorn backend.wsgi:application --bind 0.0.0.0:$PORT

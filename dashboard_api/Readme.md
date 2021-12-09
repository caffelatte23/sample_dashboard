To run the server, run:

```
pip install -qr requirements.txt

uvicorn main:app --reload
or
uvicorn main:app --host --port
```

To view the Swagger UI interface:

```
open http://127.0.0.1:8000/docs
```
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import service

app = FastAPI()
app.include_router(service.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=8080)
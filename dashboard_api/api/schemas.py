from pydantic import BaseModel


class userData(BaseModel):
    username: str
    password: str


class project_info(BaseModel):
    project_id: int

class schedule_info(BaseModel):
    user_id: str
    start_date: str



import json
from fastapi import APIRouter, Response

from .schemas import project_info, schedule_info, userData


router = APIRouter()

taskData = {0: [
        {
            "id": 1,
            "content": "テスト1",
            "manager": 'A',
            "line": '2021/09/11',
            "status": 0
        },
        {
            "id": 2,
            "content": "テスト2",
            "manager": 'A',
            "line": '2021/09/11',
            "status": 1
        },
        {
            "id": 3,
            "content": "テスト3",
            "manager": 'A',
            "line": '2021/09/11',
            "status": 3
        },
        {
            "id": 4,
            "content": "テスト1",
            "manager": 'A',
            "line": '2021/09/11',
            "status": 1
        },
        {
            "id": 5,
            "content": "テスト2",
            "manager": 'A',
            "line": '2021/09/11',
            "status": 1
        },
        {
            "id": 6,
            "content": "テスト3",
            "manager": 'A',
            "line": '2021/09/11',
            "status": 1
        },
        {
            "id": 7,
            "content": "テスト1",
            "manager": 'A',
            "line": '2021/09/11',
            "status": 1
        },
        {
            "id": 8,
            "content": "テスト2",
            "manager": 'A',
            "line": '2021/09/11',
            "status": 1
        },
        {
            "id": 9,
            "content": "テスト3",
            "manager": 'A',
            "line": '2021/09/11',
            "status": 1
        },
        {
            "id": 10,
            "content": "テスト1",
            "manager": 'A',
            "line": '2021/09/11',
            "status": 1
        },
        {
            "id": 11,
            "content": "テスト2",
            "manager": 'A',
            "line": '2021/09/11',
            "status": 1
        },
        {
            "id": 12,
            "content": "テスト3",
            "manager": 'A',
            "line": '2021/09/11',
            "status": 1
        },
]}

schedules =  {
    '2021-11-21': [{
        "title": 'work',
        "range": {
            "start": '2021-11-21 12:00',
            "end": '2021-11-21 18:00'
        },
        "desc": "sample text"
    }]
}


@router.post("/login")
async def login(data: userData):
    status = 0
    username = 'test_user'
    password = 'Password0001'

    if (data.username != username) or (data.password != password):
        status = 1

    return status


@router.get("/task/")
async def getTaskData(project_id: int=0):
    return taskData[project_id]


@router.get("/schedule")
async def getScheduleData(info: schedule_info):
    return schedules


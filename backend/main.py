

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json


app = FastAPI()

# CORS config
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


resume_data = {}

@app.post("/ai-enhance")
async def enhance_content(request: dict):
    try:
        content = request.get("content", "")
        return {"enhanced_content": f"[Enhanced] {content}"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/save-resume")
async def save_resume(resume: dict):
    try:
        global resume_data
        resume_data = resume
        with open("resume_data.json", "w") as f:
            json.dump(resume, f)
        return {"status": "Resume saved successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))



    
    
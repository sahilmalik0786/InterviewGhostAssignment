

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json
import os

app = FastAPI()

# CORS configuration
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

@app.get("/get-resume")
async def get_resume():
    try:
      
        if os.path.exists("resume_data.json"):
            with open("resume_data.json", "r") as f:
                return json.load(f)
        return resume_data
    except Exception as e:
        raise HTTPException(status_code=404, detail="Resume not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
    
    
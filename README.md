# Facts App – Django REST + React

This is a full-stack web application built using **Django REST Framework** for the backend and **React** for the frontend.

The app allows users to perform full **CRUD operations** on facts.

---

## 🔧 Tech Stack

### Backend
- Python
- Django
- Django REST Framework
- SQLite

### Frontend
- React
- JavaScript
- CSS

---

## ✨ Features

- Create new facts
- View list of facts
- Update facts
- Delete facts
- REST API based architecture
- Clean and simple UI

---

## 📂 Project Structure
Django_class/
├── venv/
│
├── assignment-beni/
│ ├── backend/
│ │ ├── manage.py
│ │ ├── backend/
│ │ │ └── settings.py
│ │ ├── facts/
│ │ │ ├── models.py
│ │ │ ├── serializers.py
│ │ │ ├── views.py
│ │ │ └── urls.py
│ │ └── db.sqlite3
│ │
│ ├── frontend/
│ │ ├── src/
│ │ │ ├── components/
│ │ │ ├── App.js
│ │ │ └── index.js
│ │ └── package.json
│ │
│ ├── .gitignore
│ └── README.md


## ▶ How to Run Backend (Django)

``` bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install django djangorestframework django-cors-headers
python manage.py migrate
python manage.py runserver
```

Backend runs at: http://127.0.0.1:8000/

------------------------------------------------------------------------

## ▶ How to Run Frontend (React)

``` bash
cd frontend
npm install
npm start
```

Frontend runs at: http://localhost:3000/

------------------------------------------------------------------------

## 🔌 API Endpoints

  Method   Endpoint           Description
  -------- ------------------ ---------------
  GET      /api/facts/        Get all facts
  POST     /api/facts/        Add new fact
  PUT      /api/facts/{id}/   Update fact
  DELETE   /api/facts/{id}/   Delete fact

------------------------------------------------------------------------

## 👨‍💻 Author

**Abhinav Kumar**
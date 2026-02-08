# Facts App – Full Stack Mini Project (Beni Assessment)

This project is a full-stack application with a Django REST API backend and a React frontend, deployed on AWS.

## 🔗 Live Links
- **Frontend URL:** [http://13.127.54.114:3000](http://13.127.54.114:3000)
- **Backend API URL:** [http://13.127.54.114:8000/api/facts/](http://13.127.54.114:8000/api/facts/)

---

## 📖 How I Developed This Application

Following the assessment requirements, I broke the development into four key phases:

1.  **API Development (Task 1):** I used **Django REST Framework** to build a robust API. I created a Fact model and a Serializer to return the required JSON data. I ensured the endpoint `/api/facts/` was accessible and properly formatted.
2.  **UI Development (Task 2):** I built the frontend using **React**. I used the `useEffect` and `fetch` hooks to consume the Django API. I designed a clean, responsive UI that displays the facts in a list and allows for real-time interaction.
3.  **Deployment (Task 3):** I hosted the entire application on an **AWS EC2 (Ubuntu)** instance. I configured the security groups to allow public access on ports 8000 and 3000.
4.  **Production Setup:** To ensure 24/7 availability, I used **PM2** to manage the backend and frontend processes, ensuring they stay online even after terminal sessions end.

---

## 💡 What I Learnt in This Exercise

This assignment was a great learning experience. Specifically, I learnt:
* **End-to-End Deployment:** How to take a project from `localhost` to a live **AWS** cloud environment.
* **Full-Stack Connectivity:** Managing CORS (Cross-Origin Resource Sharing) between two different ports (3000 and 8000).
* **Linux & Server Management:** Navigating the Ubuntu terminal, managing permissions, and using process managers like **PM2**.
* **Cloud Security:** Configuring **AWS Security Groups** to selectively open ports for web traffic.
* **Problem Solving:** Handling dynamic IP changes and configuring `ALLOWED_HOSTS` in Django for cloud hosting.

---

## 🛠 Tech Stack
- **Backend:** Python, Django REST Framework, SQLite
- **Frontend:** React.js, CSS3
- **DevOps:** AWS EC2, PM2, GitHub

---

## 📂 Folder Structure
```text
project-root/
 ├── backend/      # Django REST API
 ├── frontend/     # React UI
 └── README.md     # Documentation


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

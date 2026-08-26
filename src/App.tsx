import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Subjects from "./pages/Subjects";
import SubjectDetail from "./pages/SubjectDetail";
import TopicDetail from "./pages/TopicDetail";
import Practice from "./pages/Practice";
import PracticeRun from "./pages/PracticeRun";
import Exams from "./pages/Exams";
import ExamRun from "./pages/ExamRun";
import Tutor from "./pages/Tutor";
import Progress from "./pages/Progress";
import Papers from "./pages/Papers";
import Admin from "./pages/Admin";
import AdminImport from "./pages/AdminImport";
import AdminMisses from "./pages/AdminMisses";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="subjects/:slug" element={<SubjectDetail />} />
        <Route path="topics/:id" element={<TopicDetail />} />
        <Route path="papers" element={<Papers />} />

        <Route element={<ProtectedRoute />}>
          <Route path="practice" element={<Practice />} />
          <Route path="practice/run" element={<PracticeRun />} />
          <Route path="exams" element={<Exams />} />
          <Route path="exams/run" element={<ExamRun />} />
          <Route path="tutor" element={<Tutor />} />
          <Route path="progress" element={<Progress />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="admin" element={<Admin />} />
          <Route path="admin/import" element={<AdminImport />} />
          <Route path="admin/misses" element={<AdminMisses />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

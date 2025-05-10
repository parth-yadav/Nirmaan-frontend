// src/routes.js
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// import Layout from "./components/Dashboard/Layout.jsx";
import Layout from "./components/Test/Layout.jsx";
import BlogList from "./components/Blogss/BlogList.jsx";
import MainContent from "./components/Test/TestPage.jsx";
import SignUpPage from "./components/SignUp/SignUpPage/SignUpPage.jsx";
// import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import LoginPage from "./components/Login/LoginPage.jsx";
import Wallet from "./components/Wallet/Wallet.jsx";
import HomePage from "./components/Homepage/HomePage.jsx";
// import ThemeSwitcher from "./features/theme/ThemeSwitcher";

import BlogListCo from "./components/BlogCord/BlogCordPage/BlogList.jsx";

import QuestionPool from "./components/QuestionPool/QuestionPoolPage.jsx";
import AuthLayout from "./utils/AuthLayout.jsx";
import App from "./App.jsx";

import TestComponent from "./components/Test/TestComponent/TestComponent.jsx";
import ExamSchemas from "./components/ExamSchemas/ExamSchemas.jsx";
import Team from "./components/Team/Team.jsx";
import Students from "./components/Students/Students.jsx";
// import Organisation from "./components/Orgnaisation/Organisation.jsx";
import Analytics from "./components/Analytics/Analytics.jsx";
import BlogForm from "./components/BlogCord/BlogComponentsNew/NewBlogForm.jsx";
import Organisation from "./components/Orgnaisation/Organisation.jsx";
import Testing from "./components/Testing/Testing.jsx";
import ExamSchema from "./components/ExamSchemas/NewExamSchema/NewExamSchema.jsx";
import ExamSchemaE from "./components/ExamSchemas/MarketPlace/MarketPlace.jsx";
import MarketPlace from "./components/ExamSchemas/MarketPlace/MarketPlace.jsx";
//import EditSection from "./components/ExamSchemas/";
import AddNewSection from "./components/ExamSchemas/AddNewSection/AddNewSection.jsx";

import DemoPage from "./components/Table/page.tsx";

import QuestionPoolLayout from "./components/QuestionPool/ExamPage/QuestionPoolSeperated/QuestionPoolLayout.tsx";

import TestQuestionEditor from "./components/TextEditorTesting/texteditor.tsx";
import BlogEditorPage from "./components/BlogEditor/BlogEditor.tsx";
import SingleBlog from "./components/SingleBlog/SingleBlog.tsx";
import Timeline from "./components/QuestionPool/Timeline/Timeline.jsx";
import Settings from "./components/Settings/Settings.jsx";
import { QuestionPoolApproval } from "./components/QuestionPool/QuestionPoolApproval/QuestionPoolApproval.tsx";
import QuestionPoolPage from "./components/QuestionPool/QuestionPoolPage.jsx";
import BlogCreator from "./components/BlogEditor/BlogCreator.tsx";
import { ProposedChanges } from "./components/QuestionPool/QuestionForm/Proposed Changes/QuestionChanges.tsx";
import ExamPage from "./components/ExamPage/ExamPage.tsx";
import TestResult from "./components/ResultPdf/TestResult.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route
        path="login"
        element={
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        }
      />
      <Route
        path="signup"
        element={
          <AuthLayout authentication={false}>
            <SignUpPage />
          </AuthLayout>
        }
      />
      <Route
        path="quiz"
        element={
          <AuthLayout authentication={false}>
            <Layout />
          </AuthLayout>
        }
      >
        {/* Ensure that Layout has an Outlet for rendering nested routes */}
        <Route index element={<MainContent />} />
        <Route path="blogs" element={<BlogList />} />
        <Route path="wallet" element={<Wallet />} />

        <Route path="discover" element={<TestComponent />} />

        <Route path="test" element={<MainContent />} />
        <Route path="blogscord" element={<BlogListCo />} />
        <Route path="question-pool" element={<QuestionPoolPage/>} />

        <Route path="exam-schema" element={<ExamSchemas />} />
        <Route path="team" element={<Team />} />
        <Route path="students" element={<Students />} />
        <Route path="team" element={<Team />} />
        <Route path="organisation" element={<Organisation />} />
        <Route path="analytics" element={<Analytics />} />

        <Route path="testing" element={<Timeline />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route
        path="approve-exampool"
        element={
          <AuthLayout authentication={false}>
            <QuestionPoolApproval />
          </AuthLayout>
        }
      />
      <Route
        path="edit-questionpool"
        element={
          <AuthLayout authentication={false}>
            <QuestionPoolLayout />
          </AuthLayout>
        }
      />
      <Route
        path="blogeditor"
        element={
          <AuthLayout authentication={false}>
      <BlogCreator />
          </AuthLayout>
        }
      />
      <Route
        path="proposed-changes"
        element={
          <AuthLayout authentication={false}>
      <ProposedChanges />
          </AuthLayout>
        }
      />
      <Route
        path="exampage"
        element={
          <AuthLayout authentication={false}>
          <ExamPage />
          </AuthLayout>
        }
      />
      <Route
        path="singleblog"
        element={
          <AuthLayout authentication={false}>
            <SingleBlog />
          </AuthLayout>
        }
      />
      <Route
        path="testresult"
        element={
          <AuthLayout authentication={false}>
            <TestResult />
          </AuthLayout>
        }
      />
    </Route>
  )
);

import axios from "axios";
import cookies from "react-cookies";
const BASE_URL = "http://localhost:8080/EPMWebSpring/";

export const endpoints = {
    "user-login": "api/user/login/",
    'current-user': "api/user/current-user",
    'register': 'api/user/process_register/',
    'activities': 'api/activities/',
    'joinedActivities': 'api/activities/joined',
    'createActivity': 'api/activities/create',
    'allActivitiesBySemester': 'api/activities/all',
    'activityDetail': (id) => `api/activities/${id}`,
    'updateActivity': (id) => `api/activities/update/${id}`,
    'deleteActivity': (id) => `api/activities/delete/${id}`,
    'createAdmin': 'api/admin',
    'createAssistant': 'api/assistant',
    'listAssistant': 'api/assistant',
    'createComment': 'api/comments/create',
    'deleteComment': 'api/comments/delete',
    'activityComments': (activityId) => `api/comments/activity/${activityId}`,
    'updateComment': 'api/comments/update',
    'getSubComments': (parentId) => `api/comments/get-child/${parentId}`,
    'rejectJoin': (joinId) => `api/join-activity/${joinId}`,
    'listJoinActivities': (activityId) => `api/join-activity/${activityId}`,
    'likeActivity': 'api/likes/like',
    'countLikeActivity': 'api/likes/count',
    'checkLike': 'api/likes/exists',
    'createMissingReport': 'api/missing-report/create',
    'missingReportOfStudent': 'api/missing-report/get-missing-report-of-student/',
    'missingReportByFaculty': 'api/report/',
    'missingReportDetail': (mrId) => `api/missing-report/${mrId}`,
    'getMissingReport': 'api/missing-report/get-list',
    'pdfReport': (studentId) => `api/pdf/${studentId}`,
    'csvReport': (studentId) => `api/csv/${studentId}`,
    'scoreByTerm': 'api/score/scores-by-term',
    'totalScoreByTerm': 'api/score/total-scores-by-term',
    'acceptScoreStudent': 'api/score-student/accept',
    'uploadCsvRollup': (activityId) => `api/score-student/upload-csv?activityId=${activityId}`,
    'userScore': (userId) => `api/score-student/scores/${userId}`,
    'statisticByClass': (classId) => `api/statistics/class/${classId}/achievements`,
    'registerByUserAndActivity': (activityId) => `api/register/user-and-activity/activity/${activityId}`,
    'registerSubmit': 'api/register/',
    "scoreStudentResult": 'api/score-student/result',
    'personalRegister': 'api/register/personal-register',
    'semesters': 'api/semesters/',
    'terms': 'api/terms/',
    'faculties': 'api/faculties/'
}

export const authApi = () => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            "Authorization": cookies.load('token')
        }
    })
}

export default axios.create({
    baseURL: BASE_URL
})

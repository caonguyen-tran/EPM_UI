import axios from "axios";
import cookies from "react-cookies";
const BASE_URL = "http://34.47.125.99:8080/EPMWebSpring-1.0-SNAPSHOT/";

export const endpoints = {
    "user-login": "api/user/login/",
    'current-user': "api/user/current-user/",
    'register': 'api/user/process_register/',
    'activities': 'api/activities/',
    'joinedActivities': 'api/activities/joined',
    'createActivity': 'api/activities/create',
    'activityDetail': (id) => `api/activities/${id}`,
    'updateActivity': (id) => `api/activities/update/${id}`,
    'deleteActivity': (id) => `api/activities/delete/${id}`,
    'createAdmin': 'api/admin',
    'createAssistant': 'api/assistant',
    'listAssistant': 'api/assistant',
    'createComment': 'api/comments/create',
    'deleteComment': 'api/comments/delete',
    'activityComments': 'api/comments/activity',
    'updateComment': 'api/comments/update',
    'rejectJoin': (joinId) => `api/join-activity/${joinId}`,
    'listJoinActivities': (activityId) => `api/join-activity/${activityId}`,
    'likeActivity': 'api/likes/like',
    'countLikeActivity': 'api/likes/count',
    'checkLike': 'api/likes/exists',
    'createMissingReport': 'api/missing-report/create',
    'missingReportOfStudent': 'api/missing-report/get-missing-report-of-student/',
    'missingReportByFaculty': 'api/report/',
    'pdfReport': (studentId) => `api/pdf/${studentId}`,
    'csvReport': (studentId) => `api/csv/${studentId}`,
    'scoreByTerm': 'api/score/scores-by-term',
    'totalScoreByTerm': 'api/score/total-scores-by-term',
    'acceptScoreStudent': 'api/score-student/accept',
    'uploadCsvRollup': 'api/score-student/upload-csv',
    'userScore': (userId) => `api/score-student/scores/${userId}`,
    'statisticByClass': (classId) => `api/statistics/class/${classId}/achievements`
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

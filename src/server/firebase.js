import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  "type": "service_account",
  "project_id": "sonic-skull",
  "private_key_id": "b2895d54c1d206cfe3cb84c9043b569c2bf916c6",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCgJMPTDA0TIBwB\nP/fC6OV9eqehR/QgP473vMdGxZA948tNZgrBsdJ8DtjzCbkNRtLH1w9N1pJBFD87\nWpPApmIgBeEOWhDbM49fCIGlP8vRB5hcEvw7x0saljVvcEPtbjFkJzg1H5wd6N+I\nE+lRBhsyuy4b/XIM3gf5jM90TJVEE6cSdeRsUHo+LxaevIGUanLjRpPI4zCzwGiF\nNnaBbEQMFepLOGRczUZejUh5iPvFAJY+qlUJVij0i9yQfioblU89JRPwj9HB7Xze\nPlQj3N4d43TH5bA9D7qF+OOIVEoPsNWC8MR7rju3KZ/fAclwgC5GN13/Qex81kzE\nmUMKfQY1AgMBAAECggEASo1DAqWaEpzAnM5YO8srRvKKRjlWi4q7NlaSWL6Ra1Z4\nJySJfmmXiPxqgB43IVimuLTEIaLx/Ez+MNX2cdmjVbAW+RTxwvIqXP37SOA9tKZ6\nBecquHOLYamq36GeZdKGOM9PSd/Y0E3Afjtywy76C3B7QzmGVjoo8UJds5ERbhqR\ng3wemFp3tROtNVsUzFYxxDxo8DOlsNMp3agxJdj2jvRqPlcXjNjl2vncDTWurUzl\nrcYgDfVuaMkmGC/H5N0OpN49Yn2c/V0IWhIWFbRn4EVRUjDlDjZxpj5lPjYSvvni\nSnqOjHtBJhiqPs7/2YSC1XGLrmCDz4tpmwQ/mnyAswKBgQDNNGm4sX/3tCYicett\ncThBbskCAEXiJuOGUGQL4QRcwyFXxd6Sm2pLuNEewKSfm0pzy0SS6mcpwwRe0OWd\niu1lrGqREbkeioipAfEs6VPGaclmJSwTZ6EOI6/hxAKTnuGPrSyySzTCHnIACSsa\nDCJTDZctzHmm2VXddhaRMe4kiwKBgQDHyOFsTkhktIopazZybQkRoRPwp1PMxP+q\njBpU7XU6mBGKPtK4M5+/ewP3nrkoFdzB+t+Oiq0Xmb8/0BoJIlRaK8AGq/LEfkiZ\nWbYTNs5NvS3VZcSfn23PbkvY6Tk9vPjdKAj573J+IyJLSh7xAQZKd5mUVuDFjEhL\ncNA+9f8YPwKBgQC1ErjvlwFarIayAmBCVJPVeVK6B0+jPbmrvahqqwZUbIMxlpLO\nP4HOi6lMP6WEiV1rTESYd2rM+R8UI7VaDUtqWng2xrLZdlkc+W+9t66K+LIVBlwc\nS2dcuLTsvS+g36QeSiuUsLQ/Tuo9idmUxHxNWUK70SDP0BvqrddADBUd/QKBgQCp\nOJ6wFVK+cinA0X4px+9xjkWMhr61aHvCIq+/Fe9A9UOOHI5x1dBO6Uy/9iKRMItv\nhybK3u2kWucijwsuh3R5eCtLu2ODShAGTHWrqrVuJXpoEa5NIkZp99uo3EtO3vzQ\nnrOTuFz7OJk4uoygyKRieRGOE1SKH7uwotrRKZ6sEwKBgFR1BAoqRILb5zmBPzYG\nh075Y8fZv+PZXDgEMysfqhlh9dV+7Im/gqsjcKTeOqfJ6JKAtaMVQ5BXLrzrqOY/\ngc0Br4TMuCgbsjYvXrRf9HmL8NnMmYmdVa6FSe4A0ZV4LtuTsEcFQQj0OfPxwTCS\nqVRXOYvKODq+hxoBXuZFFs/C\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-emfha@sonic-skull.iam.gserviceaccount.com",
  "client_id": "113263203402561397799",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-emfha%40sonic-skull.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com",
  "storageBucket": "gs://sonic-skull.appspot.com/",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;

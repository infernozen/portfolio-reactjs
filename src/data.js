function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const certifications = [
  {
    type: "CERTIFICATION",
    text: "Google Cloud Certified Cloud Architect Professional",
    link: "https://www.credly.com/badges/5e4332bb-f466-4da2-84d8-7c2df5e182e3/public_url",
    imagepath: "pca_cert.jpg",
    style: { width: "65%" },
  },
  {
    type: "CERTIFICATION",
    text: "Kubernetes And Cloud Native Associate By CNCF",
    link: "https://www.credly.com/badges/6a04d71d-b677-4ac0-abda-7e197596d36c/linked_in_profile",
    imagepath: "kcna_cert.jpg",
    style: { width: "65%" },
  },
  {
    type: "CERTIFICATION",
    text: "Kubernetes Fundamentals By Linux Foundation",
    link: "https://www.credly.com/badges/d57eba38-fbf7-4cfe-ae09-14ab50cffc1b/linked_in_profile",
    imagepath: "kube_fund.jpg",
    style: { width: "65%" },
  },
  {
    type: "CERTIFICATION",
    text: "Cloud Computing By IIT Kharagpur (Top 5%)",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS87S5421014710065430",
    imagepath: "iit_cloud.jpg",
    style: { width: "70%" },
  },
  {
    type: "CERTIFICATION",
    text: "Problem Solving Through Programming In C (Top 5%)",
    link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs121/Course/NPTEL23CS121S4335406720334617.pdf",
    imagepath: "c_cert.jpg",
    style: { width: "70%" },
  },
  {
    type: "CERTIFICATION",
    text: "AI Search Methods For Problem Solving by IIT Madras",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS67S3421014310065430",
    imagepath: "ai_smfps.jpg",
    style: { width: "70%" },
  },
  {
    type: "CERTIFICATION",
    text: "Google Cloud Career Practioner Program by GDSC SSN",
    link: "https://drive.google.com/file/d/1T_lVovXr6byuDDOV4nK0s-_z4LlOJ_o3/view",
    imagepath: "practioner.jpg",
    style: { width: "70%" },
  },
];

const badges = [
  {
    type: "BADGES",
    text: "Google Cloud Certified Cloud Architect Professional",
    link: "https://www.credly.com/badges/5e4332bb-f466-4da2-84d8-7c2df5e182e3/public_url",
    imagepath: "pca_badge.png",
    style: { width: "50%" },
  },
  {
    type: "BADGES",
    text: "Kubernetes And Cloud Native Associate By CNCF",
    link: "https://www.credly.com/badges/6a04d71d-b677-4ac0-abda-7e197596d36c/linked_in_profile",
    imagepath: "kcna_badge.png",
    style: { width: "50%" },
  },
  {
    type: "BADGES",
    text: "LFS250: Kubernetes and Cloud Native Essentials",
    link: "https://www.credly.com/badges/a7a3f46a-4592-479f-a2b9-78ed0649c546/public_url",
    imagepath: "lf_badge.png",
    style: { width: "50%" },
  },
  {
    type: "BADGES",
    text: "LFS200: Fundamentals of Open Source IT and Cloud Computing",
    link: "https://www.credly.com/badges/5ddf5b9d-b061-4c96-bc76-3bdbc8ee84c8/public_url",
    imagepath: "lf_badge.png",
    style: { width: "50%" },
  },
  {
    type: "BADGES",
    text: "July 2023 Arcade: Level 1 AppDev and Infrastructure",
    link: "https://www.cloudskillsboost.google/public_profiles/dddf5a95-4792-4d07-804c-867f8dd0055a/badges/4329618",
    imagepath: "july_arcade_1.png",
    style: { width: "50%" },
  },
  {
    type: "BADGES",
    text: "July 2023 Arcade: Level 2 Deep Data Dive (Qwiklabs)",
    link: "https://www.cloudskillsboost.google/public_profiles/dddf5a95-4792-4d07-804c-867f8dd0055a/badges/4396079",
    imagepath: "july_arcade_2.png",
    style: { width: "50%" },
  },
  {
    type: "BADGES",
    text: "July 2023 Arcade: Level 3 Trivia (Qwiklabs)",
    link: "https://www.cloudskillsboost.google/public_profiles/dddf5a95-4792-4d07-804c-867f8dd0055a/badges/4420648",
    imagepath: "july_arcade_3.png",
    style: { width: "50%" },
  },
  {
    type: "BADGES",
    text: "Cloud Arcade Facilitator Program July 2023 (Badges)",
    link: "https://www.cloudskillsboost.google/public_profiles/dddf5a95-4792-4d07-804c-867f8dd0055a",
    imagepath: "skills_boost.png",
    style: { width: "50%" },
  },
  {
    type: "BADGES",
    text: "Google Cloud Career Practitioner Program 2022 (Badges)",
    link: "https://www.cloudskillsboost.google/public_profiles/d88f6b21-1929-402f-a12f-a71fef15b103",
    imagepath: "skills_boost.png",
    style: { width: "50%" },
  },
];

const projects = [
  {
    type: "PROJECTS",
    text: <>PetClinic DevSecOps (Deploy)<br></br>[Jenkins - Docker - Terraform ]</>,
    link: "https://github.com/infernozen/petclinic-devops.git",
    imagepath: "petclinic-preview.png",
    style: { width: "73%" },
  },
  {
    type: "PROJECTS",
    text: <>Pneumonia Detection<br></br>[ Kubeflow - GCP - TensorFlow ]</>,
    link: "https://github.com/infernozen/pneumonia-detection-kubeflow",
    imagepath: "pneumonia-detection.png",
    style: { width: "85%" },
  },
  {
    type: "PROJECTS",
    text: <>Faszen - Fashion App (Frontend)<br></br>[ Flutter - Dart]</>,
    link: "https://github.com/infernozen/faszen-frontend",
    imagepath: "pneumonia-detection.png",
    style: { width: "85%" },
  },
  {
    type: "PROJECTS",
    text: <>Faszen - Fashion App (Backend)<br></br>[ Nodejs - Expressjs - MySQL ]</>,
    link: "https://github.com/infernozen/faszen-backend-nodejs",
    imagepath: "pneumonia-detection.png",
    style: { width: "85%" },
  },
  {
    type: "PROJECTS",
    text: <>Fizard (Fashion Helper Chat Bot)<br></br>[Cloud Function - DFlow - Node js]</>,
    link: "https://github.com/infernozen/pneumonia-detection-kubeflow",
    imagepath: "pneumonia-detection.png",
    style: { width: "85%" },
  },
];

const shuffledProjects = shuffleArray(projects);
const shuffledCertifications = shuffleArray(certifications.concat(shuffledProjects));

const allItems = shuffledCertifications.concat(badges);

export { certifications, badges, projects , allItems};

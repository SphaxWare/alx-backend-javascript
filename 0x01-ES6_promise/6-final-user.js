import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.all([userPromise, photoPromise])
    .then(([userData, photoData]) => {
      return [
        { status: 'fulfilled', value: userData },
        { status: 'fulfilled', value: photoData }
      ];
    })
    .catch(error => {
      return [
        { status: 'rejected', value: error },
        { status: 'rejected', value: error }
      ];
    });
}

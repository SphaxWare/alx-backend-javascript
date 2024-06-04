export default function getStudentIdsSum(list) {
  return list.reduce((sum, list) => sum + list.id, 0);
}

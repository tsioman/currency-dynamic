export const formatDate = (dateSting?: string) => {  
  const D = dateSting ? new Date(dateSting) : new Date();
  const y = D.getFullYear();
  const m = `0${D.getMonth()+1}`.substr(-2);
  const d = `0${D.getDate()}`.substr(-2);

  return [y,m,d].join('-');
}
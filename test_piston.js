fetch('https://emkc.org/api/v2/piston/runtimes')
  .then(res => res.json())
  .then(data => {
    console.log(data.filter(r => ['python', 'c', 'c++'].includes(r.language)));
  });

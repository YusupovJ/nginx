fetch("/api")
  .then((res) => res.text())
  .then(console.log)
  .catch(console.error);

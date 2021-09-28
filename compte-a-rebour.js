function getTimeRemaining (endtime) {
  const total = Date.parse (endtime) - Date.parse (new Date ());
  const seconds = Math.floor ((total / 1000)% 60);
  const minutes = Math.floor ((total / 1000/60)% 60);
  heures const = Math.floor ((total / (1000 * 60 * 60))% 24);
  const jours = Math.floor (total / (1000 * 60 * 60 * 24));

  revenir {
    total,
    journées,
    heures,
    minutes,
    secondes
  };
}

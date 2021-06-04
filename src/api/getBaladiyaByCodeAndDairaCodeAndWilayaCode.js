const projectBaladiya = require('../utils/projections/projectObject');

const getBaladiyaByCodeAndDairaCodeAndWilayaCode = (data) =>
/**
   * Takes a wilaya mattricule ,a daira code , bladiya code and return the baladyia.
   *
   * @example Get a baladiya  by code, daira code, and wilaya mattricule(mattricule:1, code:101, bcode:101)
   *
   * //returns {name : "ADRAR"}
   * getWilayaByBaladyiaName(1, 101,101)
   *
   * @param { integer } mattricule wilaya mattricule
   * @param { integer } code daira code
   * @param { integer } bcode baladiya code
   * @param { String[] } projection a list of Baladyia object attributes to keep
   * @returns { Object | null } Returns  a baldiya's object, or null
   */
  (mattricule, code, bcode, projection)=>{
    const wilaya = data.find((w) => w.mattricule === mattricule);
    if (wilaya) {
      const daira = wilaya.dairats.find((d)=> d.code === code);
      if( daira){
        const baladiya = daira.baladyiats.find((b)=> b.code === bcode);
        return projectBaladiya(baladiya, projection);
      }

    }
    return null;
  };

module.exports = getBaladiyaByCodeAndDairaCodeAndWilayaCode;
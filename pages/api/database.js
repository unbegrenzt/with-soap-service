var dao = require("../../app/utils/oracleDb.js");

export default function handler(req, res) {
  let opc = parseInt(req.query.opc);
  let sql = '';

  switch (opc){
      case 1:
          sql= "SELECT ID_USER FROM FACTURACION.ELSV_FS_USUARIOS WHERE ID_USER ='MRIVERA'";
          dao.open(sql, [], false, res);
          break;
          
      case 2 : sql = "SELECT ID_USER FROM FACTURACION.ELSV_FS_USUARIOS WHERE ID_USER = :usr";
              var usr = parseInt(req.query.usr);
              dao.open(sql,[usr], false, res);
              break;
       default : 
       res.status(200);
       res.send(JSON.stringify("Opcion no valida"));
  }
}
const path = require('path');

const connection = require(path.join(__dirname, 'index.js'));

const getDescriptionData = (dealId, callback) => {
  connection.query(
    `
      SELECT 
        d.id deal_id,
        d.name deal_name, 
        m.name merch_name, 
        d.descrip, 
        d.addl_info,
        d.inclusions, 
        d.exclusions, 
        d.fine_print, 
        GROUP_CONCAT (c.name SEPARATOR ', ') ttd,
        l.addr_ln1, 
        l.addr_ln2, 
        l.city,
        l.state_abbr,
        l.zip,
        l.lon,
        l.lat,
        l.gp_id
      FROM deal d
      INNER JOIN merchant m ON ( d.merch_id = m.id  )
      INNER JOIN location l ON ( d.loc_id = l.id  )
      INNER JOIN deal_cat_join dcj ON ( d.id = dcj.deal_id  )  
      INNER JOIN category c ON ( dcj.cat_id = c.id  )
      WHERE d.id = ${dealId}
      GROUP BY d.id
      ORDER BY d.id
  ;`,
    (error, result, fields) => {
      if (error) {
        console.log('database query error');
      } else {
        callback(null, result);
      }
    },
  );
};

// getDescriptionData(25, (e, s) => console.log(s));

const dealTableRecordCount = (callback) => {
  connection.query('SELECT * from deal', (error, results, fields) => {
    if (error) throw error;
    callback(null, results);
  });
};
dealTableRecordCount((e, s) => console.log('The deal table contains', s.length, 'records.'));

connection.end();

module.exports = {
  getDescriptionData,
  dealTableRecordCount,
};

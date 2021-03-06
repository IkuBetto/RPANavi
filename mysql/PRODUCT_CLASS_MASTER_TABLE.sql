DROP TABLE IF EXISTS PRODUCT_CLASS_MASTER_TABLE;
CREATE TABLE `PRODUCT_CLASS_MASTER_TABLE` (
  `No` int(11) NOT NULL AUTO_INCREMENT,
  `class_id` int(3) NOT NULL,
  `big_class` varchar(30) NOT NULL,
  `small_class` varchar(30) NOT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `update_person` varchar(30) NOT NULL DEFAULT 'system',
  PRIMARY KEY (`No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
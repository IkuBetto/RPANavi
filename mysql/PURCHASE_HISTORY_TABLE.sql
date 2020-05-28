DROP TABLE IF EXISTS PURCHASE_HISTORY_TABLE;
CREATE TABLE `PURCHASE_HISTORY_TABLE` (
  `No` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `ecsite_id` int(3) NOT NULL,
  `purchase_price` int(7) NOT NULL,
  `buy_number` int(3) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sell_price` int(7) NOT NULL,
  `sell_number` int(3) NOT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `update_person` varchar(30) NOT NULL DEFAULT 'system',
  PRIMARY KEY (`No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 4/23/2018
 * Time: 4:27 AM
 */

if ($fetch_data->num_rows()>0){
	foreach ($fetch_data->result() as $row){
		echo $row->mid;
		echo $row->name;
		echo $row->description;

	}
}else{
	echo 'No Data Fund';
}

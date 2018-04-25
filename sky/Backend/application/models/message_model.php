<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 4/23/2018
 * Time: 3:47 AM
 */
class message_model extends CI_Model{
	function fetch_data(){
		$query=$this->db->get("messages");
//		$query=$this->db->query("SELECT * FROM messages ORDER BY DESC ");
		return $query;
	}
}

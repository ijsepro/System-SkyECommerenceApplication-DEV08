<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/12/2018
 * Time: 8:05 AM
 */

class CommentModel extends CI_Model
{
	function fetch_data(){
		$query=$this->db->get("messages");
//		$query=$this->db->query("SELECT * FROM messages ORDER BY DESC ");
		return $query;
	}
}

<?php
/**
 * Created by IntelliJ IDEA.
 * User: USER
 * Date: 5/24/2018
 * Time: 2:06 AM
 */
class SystemUserModel extends CI_Model{


	public function insert($data)
	{
		$this->db->insert('systemUser', $data);
		return $this->db->affected_rows();
	}

//	public function checkSystemUser($email, $password)
//	{
//		$query = $this->db->select('firstName')->where(['firstName' => $password])->where(['lastName' => $email])->get('systemUser');
//		if ($query->num_rows() == 1) {
//			return true;
//		} else {
//			return false;
//		}
//	}
}

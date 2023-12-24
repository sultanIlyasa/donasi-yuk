<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserModel;

class User extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format
     *
     * @return mixed
     */

     use ResponseTrait;
    public function index()
    {
        //
        $model = new UserModel();
        $data = $model->findAll();
        return $this->respond($data);
    }

    /**
     * Return the properties of a resource object
     *
     * @return mixed
     */
    public function show($id = null)
    {
        //
        $model = new UserModel();
        $data = $model->find(['id', $id]);
        return $this->respond($data);
    }

    /**
     * Return a new resource object, with default properties
     *
     * @return mixed
     */
    public function new()
    {
        //
        
    }

    /**
     * Create a new resource object, from "posted" parameters
     *
     * @return mixed
     */
    public function create()
    {
        //
        $model = new UserModel();
        $data = [
            'nama' => $this->request->getVar('nama'),
            'no' => $this->request->getVar('no'),
            'email' => $this->request->getVar('email'),
            'password' => $this->request->getVar('password'),
            'alamat' => $this->request->getVar('alamat'),
            'jk' =>$this->request->getVar('jk'),
            'level' => '1'
        ];
        $model->save($data);
        $respone = [
            'status' => 201,
            'messages' => [
                'success' => 'data inserted'
            ]
        ];
        return $this->respondCreated($respone);
    }

    /**
     * Return the editable properties of a resource object
     *
     * @return mixed
     */
    public function edit($id = null)
    {
        //
    }

    /**
     * Add or update a model resource, from "posted" properties
     *
     * @return mixed
     */
    public function update($id = null)
    {
        //
        $model = new UserModel();
        $data = [
            'nama' => $this->request->getVar('nama'),
            'no' => $this->request->getVar('no'),
            'email' => $this->request->getVar('email'),
            'password' => $this->request->getVar('password'),
            'alamat' => $this->request->getVar('alamat'),
            'jk' =>$this->request->getVar('jk'),
            'level' => $this->request->getVar('level'),
        ];
        $model->update($id,$data);
        $respone = [
            'status' => 201,
            'messages' => [
                'success' => 'data updated'
            ]
        ];
        return $this->respondCreated($respone);
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return mixed
     */
    public function delete($id = null)
    {
        //
        $model = new UserModel();
        $model->delete($id);
    }
}

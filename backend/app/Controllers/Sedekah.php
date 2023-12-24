<?php

namespace App\Controllers;

use App\Models\TransaksiSedekahModel;
use CodeIgniter\RESTful\ResourceController;

class Sedekah extends ResourceController
{
    public function index()
    {
        //
        $model = new TransaksiSedekahModel();
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
        $model = new TransaksiSedekahModel();
        $data = $model->find(['id',$id]);
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
        $model = new TransaksiSedekahModel();
        $data = [
            'jumlah'- 'id_user',
        ];
        $model->save($data);
        return $this->respond($data);
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
        $model = new TransaksiSedekahModel();
        $data = [
            'jumlah'- 'id_user',
        ];
        $model->update($id,$data);
        return $this->respond($data);
    }

    /**
     * Delete the designated resource object from the model
     *
     * @return mixed
     */
    public function delete($id = null)
    {
        //
        $model = new TransaksiSedekahModel();
        $model->delete($id);
    }
}

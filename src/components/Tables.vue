<template>
  <div class="container-fluid">
  <div>
    <vue-good-table
      title="Demo Table"
      :columns="columns"
      :rows="rows"
      :paginate="true"
      :lineNumbers="true"
      styleClass="table table-bordered table-hover"
      />
  </div>
  </div>
</template>

<script>
export default {
  name: 'Tables_view',
  data: function () {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
          html: false
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          inputFormat: 'YYYY-MM-DD',
          outputFormat: 'DD-MMM-YYYY'
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
          html: false
        }
      ],
      rows: [
        {id: 1, name: 'John', age: 20, createdAt: '2017-12-13', score: 0.03343},
        {id: 1, name: 'Vincent', age: 32, createdAt: '2017-09-22', score: 0.1},
        {id: 1, name: 'Elton', age: 22, createdAt: '2016-07-25', score: 0.312},
        {id: 1, name: 'Marie', age: 52, createdAt: '2011-01-02', score: 0.0764},
        {id: 1, name: 'Peter', age: 29, createdAt: '2017-12-13', score: 0.23},
        {id: 1, name: 'Jack', age: 65, createdAt: '1998-07-05', score: 0.0873},
        {id: 1, name: 'Donald', age: 34, createdAt: '2001-12-13', score: 0.05675},
        {id: 1, name: 'Victor', age: 23, createdAt: '2004-10-31', score: 0.02342},
        {id: 1, name: 'Helen', age: 44, createdAt: '1999-03-21', score: 0.56},
        {id: 1, name: 'Antony', age: 49, createdAt: '2011-11-11', score: 0.0234}
      ]
    }
  }
}
</script>

<style>

</style>
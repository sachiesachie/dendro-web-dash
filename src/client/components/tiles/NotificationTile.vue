<template>
  <div class="col col-sm-12 col-lg-4 flex-col">
    <div class="flex-1 flex-col tile notification-tile">

      <!-- Status -->
      <div class="flex-1-cell flex-col cell-border-bottom cell-align-middle status-cell status-cell-offline text-xs-center">
<!-- 
        <h2><i class="fa fa-check-circle-o" aria-hidden="true"></i> Online</h2>
        <span class="text-muted">Last offline: 11/11 11:22</span>
-->
        <h3><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Offline</h3>
        <span class="text-muted">Last online: 10/11 11:22 AM</span>
      </div>

      <!-- Events -->
      <div class="flex-4-cell" style="overflow-y: scroll; height: 0;">
        <table class="table table-sm table-hover events-table">
          <tbody>
            <tr>
              <th scope="row"><i class="fa fa-lg fa-exclamation-triangle text-danger" aria-hidden="true"></i></th>
              <td>5 min ago</td>
              <td>Deliberately offline for demo.</td>
            </tr>
            <tr>
              <th scope="row"><i class="fa fa-lg fa-check-circle-o text-success" aria-hidden="true"></i></th>
              <td>Today 9:00 AM</td>
              <td>NL115 ethernet module replaced. System back online.</td>
            </tr>
            <tr>
              <th scope="row"><i class="fa fa-lg fa-exclamation-triangle text-danger" aria-hidden="true"></i></th>
              <td>9/20 10:42 PM</td>
              <td>Network disconnect. No data lost.</td>
            </tr>
            <tr>
              <th scope="row"><i class="fa fa-lg fa-exclamation-triangle text-danger" aria-hidden="true"></i></th>
              <td>9/10 8:50 AM</td>
              <td>Annual calibration. System down for 2 hours.</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
// TODO: Finish
// TODO: Make colors props?
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.events-table {
  font-size: 86%;
}
.events-table th,
.events-table td {
  vertical-align: middle;
}
.events-table.table-sm th {
  padding: 0.3rem 0.6rem;
  text-align: center;
}

.notification-tile {
  background-color: #fff;
}

.status-cell {
  color: #fff;
}
.status-cell-offline {
  background-color: #bf5750;
}
.status-cell-online {
  background-color: #97bf50;
}
</style>

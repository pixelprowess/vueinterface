<template>
  <li class="pet-item media">

    <div class="media-left">
      <button class="pet-delete btn btn-xs btn-danger">
      <span class="glyphicon glyphicon-remove"></span></button>
    </div><!-- media-left -->

    <div class="pet-info media-body">

      <div class="pet-head">
        <span class="pet-name">{{appointment.petName}}</span>
        <span class="apt-date pull-right">{{appointment.aptDate}}</span>
      </div><!-- pet-head -->

      <div class="owner-name">
        <span class="label-item">Owner:</span>
        <span>{{appointment.petOwner}}</span>
      </div>
      <div class="apt-notes">{{appointment.aptNotes}}</div>

    </div><!-- pet-info -->

  </li><!-- pet-item -->


</template>

<script>
export default {
  name: 'PetAppointmentItem',
  props: ['appointment']
}
</script>

<style scoped>

  .pet-item {
    border-bottom: 1px dotted gray;
    padding-bottom: 10px;
  }

  .pet-item:last-child {
    border-bottom: none;
  }

  .pet-name {
    font-weight: 600;
    color: #337ab7;
    font-size: 1.3em;
    line-height: 100%;
  }

  .pet-info {
    font-size: 1.7em;
  }

  .label-item {
    font-weight: 600;
    color: #667B82;
  }
  
  .pet-delete {
    font-size: 1.2em;
  }

  .apt-date {
    font-style: italic;
  }

  [contenteditable]:focus {
    outline: none;
    background: #EEE8D6; 
  }
</style>
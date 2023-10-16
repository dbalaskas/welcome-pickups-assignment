// <q-table
// id="transfers"
// :rows="rows"
// :columns="columns"
// row-key="id"
// flat
// class="bg-light"
// card-container-class="bg-red"
// >
// <template #header>
//   <q-tr>
//     <q-td>STATUS</q-td>
//     <q-td>TRAVELLER</q-td>
//     <q-td>ARRIVAL/ DEPARTURE</q-td>
//     <q-td>FROM/ TO</q-td>
//     <!-- <q-td>OPPORTUNITIES</q-td> -->
//   </q-tr>
// </template>
// <template #body="props">
//   <!-- <div
//     class="row items-center justify-between bg-white rounded-borders q-py-sm q-px-lg q-my-sm"
//   >
//     <div>
//       <q-avatar> <img :src="props.row.traveler_photo" /> </q-avatar>
//     </div>
//     <div>
//       {{ props.row.traveler_first_name }} {{ props.row.traveler_last_name }}
//     </div>
//     <div>{{ getDay(props.row.datetime) }}</div>
//     <div>{{ props.row.location_title }}</div>
//   </div> -->
//   <q-tr>
//     <q-td>
//       <q-avatar> <img :src="props.row.traveler_photo" /> </q-avatar>
//     </q-td>
//     <q-td>
//       {{ props.row.traveler_first_name }} {{ props.row.traveler_last_name }}
//     </q-td>
//     <q-td>{{ getDatetime(props.row.datetime) }}</q-td>
//     <q-td>{{ props.row.location_title }}</q-td>
//   </q-tr>
// </template>
// <template #bottom>
//   <div class="">hahah</div>
// </template>
// </q-table>

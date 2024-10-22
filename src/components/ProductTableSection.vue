<template>
    <div class="container">
        <h5 class="my-4">Physico-chemical properties:</h5>
        <table class="table table-striped mb-5">
            <thead class="table-secondary">
                <tr>
                    <th v-for="(head, index) in data.tableHead" :key="index">{{ head }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(flight, index) in data.tableData" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ flight.head }}</td>
                    <td>{{ flight.body }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    // props: {
    //     table: {
    //         type: Object,
    //         required: true,
    //     }
    // },
    data() {
        return {
            data: {
                tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                tableData: [
                    { head: 'NLGI Grade', body: '1', },
                    { head: 'Base Oil Type', body: 'Mineral', },
                    { head: 'Base Oil Viscosity ', body: 'Not specified', },
                    { head: 'Thickener Type', body: 'Calcium', },
                    { head: 'Dropping Point', body: '90 min', },
                    { head: 'EP Properties', body: 'No', },
                    { head: 'Operating Temperature', body: '-10 to 60C', },
                ],
            },
        }
    }
};
</script>
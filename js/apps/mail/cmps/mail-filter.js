export default{
    template: `
    <section class="mail-filter">
        <label class="mail-search">
            <input v-model="filterBy.mailTitle" type="text" @input="filter" placeholder="Search...">
        </label>
        <hr /> 
        <div class="mail-filter-nav">
            <label :class="{ active: filterBy.isRead }">Display unread only
                <input v-model="filterBy.isRead" id="a" type="checkbox" @input="filter">
            </label>
            <label :class="{ active: filterBy.timeRecived }" >Sort by time recived
                
                <input v-model="filterBy.timeRecived" id="a" type="checkbox" @input="filter">
            </label>            
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                mailTitle: '',
                isRead: false,
                timeRecived: true
            }
        };
    },
    methods: {
        filter() {           
            this.$emit('filtered', this.filterBy);
        }
    }
};
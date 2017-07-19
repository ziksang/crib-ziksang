<template>
    <div>
        <accordion :repeat='false'>
            <accordion-item :open='true' title='李白'>
                <div class="aa">
                    <span>fdsafdsafdsa</span>
                    <span>fdsafdsafdsa</span>
                    <span>fdsafdsafdsa</span>
                    <span>fdsafdsafdsa</span>
                </div>
            </accordion-item>
             <accordion-item :open='true' title='李白'>
                <div class="aa">
                    <span>fdsafdsafdsa</span>
                    <span>fdsafdsafdsa</span>
                    <span>fdsafdsafdsa</span>
                    <span>fdsafdsafdsa</span>
                </div>
            </accordion-item>
             <accordion-item :open='true' title='李白'>
                <div class="aa">
                    <span>fdsafdsafdsa</span>
                    <span>fdsafdsafdsa</span>
                    <span>fdsafdsafdsa</span>
                    <span>fdsafdsafdsa</span>
                </div>
            </accordion-item>
             <accordion-item :open='true' title='李白'>
                <div class="aa">
                    <span>fdsafdsafdsa</span>
                    <span>fdsafdsafdsa</span>
                    <span>fdsafdsafdsa</span>
                    <span>fdsafdsafdsa</span>
                </div>
            </accordion-item>
        </accordion>
    </div>
</template>

<script>
import {Accordion} from '@/libs/accordion'
import {AccordionItem} from '@/libs/accordion-item'
export default {
    components: {
        Accordion,
        AccordionItem
    }
}
</script>

<style lang='less'>
.aa {
    padding:10px;
    span {
        display: block;
        text-align: left;
    }
}
</style>


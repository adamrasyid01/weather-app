<script setup lang="ts">
</script>

<template>
    <div class="bg-gray-900/50 p-3 text-center rounded-xl flex flex-col gap-1.5">
        <div class=" text-xl">09:00</div>
        <div>
            <hr class="border-gray-400 opacity-50 mx-auto">
        </div>

        <div class="bg-gray-300/50 p-2 rounded-lg flex items-center justify-center">
            <PhCloudRain :size="40" />
        </div>
        <div class="font-bold text-2xl">
            9<span class="align-super text-2xl">°</span>C
        </div>
    </div>
</template>
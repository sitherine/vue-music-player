<template>
  <ul>
    <li v-for="(item ,index) in list">
      <MusicListItem
        key={item.id}
        musicItem={item}
        currentMusicItem={currentMusicItem}
        playMusicHandler={playMusicHandler}
        deleteMusicHandler={deleteMusicHandler}
      />
    </li>
  </ul>
</template>

<script>

</script>

<template>
  <div class="contacts">
    <h1 class="display-6 title">Контакты</h1>
    <hr />
    <p class="lead">
      Мы ждем ваших писем по адресу
      <i style="font-weight: 600">
        <a
          :href="`mailto:my_mirror33@mail.ru&amp;body=Добрый день! Добрый день !?subject=Заказ MyMirror`"
          >my_mirror33@mail.ru</a
        >
      </i>
    </p>

    <p style="margin-top: 50px" class="lead">
      Адрес студии: г. Владимир, ул. Северная 1м, корпус 20
    </p>

    <!-- <div style="align-items: center; text-align: center; margin-top: 25px; ">
                <iframe style="width: 100%;" src="https://yandex.ru/map-widget/v1/?um=constructor%3A98cc3bb20727b495925391b5671d6c4d3ed6383fa920b3e3b7a2041263d33ed4&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
            </div> -->

    <p class="lead">
      <i>Время работы: ежедневно с 09:00 до 21:00 (в том числе выходные).</i>
    </p>
    <p class="lead">
      Вы в любое время можете связаться с нами, позвонив по номерам: <br />
      <i style="color: #337ab7; font-weight: 600">+7(920)-904-90-77</i>
      (Владимир)
    </p>
    <div style="margin-top: 20px; display: flex" class="lead">
      <p>Наши соцсети:</p>
      <social-media />
    </div>
  </div>
</template>

<script setup lang="ts">
import SocialMedia from "@/components/UI/templates/SocialMedia.vue";
</script>

<style scoped lang="scss" src="../styles/contacts.scss"></style>

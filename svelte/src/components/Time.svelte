<script>
  import { elapsedTime, time } from "../store/stores";

  const dateFromatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  })
</script>

<h2>Currenyt Time is {dateFromatter.format($time)}</h2>
<h2>Elapsed Time {$elapsedTime}</h2>
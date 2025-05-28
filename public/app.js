
document.getElementById('uploadForm').addEventListener('submit', async e => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  const res = await fetch('/upload', {
    method: 'POST',
    body: formData
  });
  
  if (res.ok) {
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'audio.mp3';
    document.body.appendChild(a);
    a.click();
    a.remove();
  } else {
    alert('Erro na conversão');
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(() => {
    console.log('Service Worker registrado!');
  });
}

export async function get(evt: any) {
  console.log({ evt });

  return {
    body: {
      items: [{ id: 1, name: 'Workshop 1' }]
    }
  };
}

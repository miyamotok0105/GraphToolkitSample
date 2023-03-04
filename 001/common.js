const channelPicker = document.querySelector('mgt-teams-channel-picker');
const messagesGet = document.getElementById('messagesGet');

channelPicker.addEventListener('selectionChanged', e => {
    if (e.detail.length) {
        let channelId = e.detail[0].channel.id;
        let teamId = e.detail[0].team.id;
        messagesGet.resource = `teams/${teamId}/channels/${channelId}/messages/delta`;
    }
});

messagesGet.templateContext = {
    messageClick: (e, message, root) => {
        const reply = root.querySelector('.reply');
        reply.classList.toggle('hidden');
    }
};


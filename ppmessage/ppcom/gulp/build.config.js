
module.exports = {
    distPath: "../../resource/assets/ppcom/assets",
    scriptFiles: [
        "../src/main/begin.js",

        // MODULE PPMessage
        "../src/main/fn/ppmessage-func-begin.js",

        "../src/main/fn/extend.js",
        "../src/main/fn/configuration.js",
        
        "../src/jQuery/pull2refresh.jquery.js",
        "../src/jQuery/animation.jquery.js",

        "../src/service/pp-service2.js",
        "../src/service/pp-service-baseservice.js",
        "../src/service/constants.js",
        "../src/service/api.js",
        "../src/service/rootCache.js",
        "../src/service/cookies.js",
        "../src/service/errorhint.js",
        "../src/service/users.js",
        "../src/service/user.js",
        "../src/service/ppsettings.js",
        "../src/service/debug.js",
        "../src/service/device.js",
        "../src/service/emoji.js",
        "../src/service/encryption.js",
        "../src/service/fileuploader.js",        
        "../src/service/language.js",
        "../src/service/tools.js",
        "../src/service/startup.js",
        "../src/service/public-api.js",
        "../src/service/pp-service-basestorage.js",
        "../src/service/json.js",
        "../src/service/assert.js",
        "../src/service/schedule.js",
        "../src/service/task.js",
        "../src/service/keys.js",
        "../src/service/monitor.js",
        "../src/service/gb2312-utf8-convert.js",
        "../src/service/publishsubscribe.js",
        "../src/service/polling.js",
        "../src/service/entity/app.js",
        "../src/service/entity/org_groups.js",
        "../src/service/entity/hovercard-welcome.js",
        "../src/service/entity/org-groups-users.js",
        "../src/service/entity/conversation.js",
        "../src/service/entity/message-store.js",
        "../src/service/entity/conversation-manager.js",
        "../src/service/entity/sheetheader.js",
        "../src/service/entity/audiocontext.js",
        "../src/service/entity/conversation-agency.js",
        "../src/service/message/api-message-adapter.js",
        "../src/service/message/api-message.js",
        "../src/service/message/message-sender.js",
        "../src/service/message/message-receiver.js",
        "../src/service/message/message-tools.js",
        "../src/service/message/pp-message.js",
        "../src/service/message/pp-message-audio.js",
        "../src/service/message/pp-message-adapter.js",
        "../src/service/message/sendsettings-factory.js",
        "../src/service/message/sendsettings-text-msg.js",
        "../src/service/message/sendsettings-file-msg.js",
        "../src/service/message/sendsettings-img-msg.js",
        "../src/service/message/sendsettings-emoji-msg.js",
        "../src/service/message/message-state-broadcast-receiver-factory.js",
        "../src/service/message/message-state-broadcast-receiver-text.js",
        "../src/service/message/message-state-broadcast-receiver-emoji.js",
        "../src/service/message/message-state-broadcast-receiver-file.js",
        "../src/service/message/message-state-broadcast-receiver-image.js",
        "../src/service/websocket/auth.js",
        "../src/service/websocket/msg.js",
        "../src/service/websocket/notification.js",
        "../src/service/websocket/notify-factory.js",
        "../src/service/websocket/online.js",
        "../src/service/websocket/sys.js",
        "../src/service/websocket/typing.js",
        "../src/service/websocket/unknown.js",
        "../src/service/websocket/conversation.js",

        "../src/view/pp-view2.js",
        "../src/view/element.js",
        "../src/view/pp-view-element-css.replaced.js",
        "../src/view/pp-view-element-div.js",
        "../src/view/span.js",
        "../src/view/p.js",
        "../src/view/img.js",
        "../src/view/sheetheader.js",
        "../src/view/conversation-list/content-container.js",
        "../src/view/conversation-list/item.js",
        "../src/view/group-members/group-members.js",
        "../src/view/group-members/group-member.js",
        "../src/view/group-members/group-member-hovercard.js",
        "../src/view/loading.js",
        "../src/view/launcher.js",
        "../src/view/container.js",
        "../src/view/launcherpreview.js",
        "../src/view/pp-view-element-messenger.js",
        "../src/view/poweredby.js",
        "../src/view/conversation.js",
        "../src/view/composercontainer.js",
        "../src/view/conversationcontent.js",
        "../src/view/conversation-content-container.js",
        "../src/view/pp-view-element-uploadingbar.js",
        "../src/view/hovercard/hovercard.js",
        "../src/view/hovercard/hovercard-content-category-single.js",
        "../src/view/imageviewer.js",
        "../src/view/app-profile-container.js",
        "../src/view/app-profile-container-activeadmin.js",
        "../src/view/conversationpart/conversationpart.js",
        "../src/view/conversationpart/pulltorefresh-button.js",
        "../src/view/conversationpart/pp-view-element-conversationpartemojibyadmin.js",
        "../src/view/conversationpart/emojibyuser.js",
        "../src/view/conversationpart/pp-view-element-conversationpartfilebyadmin.js",
        "../src/view/conversationpart/pp-view-element-conversationpartfilebyuser.js",
        "../src/view/conversationpart/pp-view-element-conversationpartimagebyadmin.js",
        "../src/view/conversationpart/pp-view-element-conversationpartimagebyuser.js",
        "../src/view/conversationpart/pp-view-element-conversationparttextbyadmin.js",
        "../src/view/conversationpart/textbyuser.js",
        "../src/view/conversationpart/audiobyadmin.js",
        "../src/view/conversationpart/pp-view-element-conversationparttimestamp.js",
        "../src/view/emoji/pp-view-element-emojiselectorgroupicon.js",
        "../src/view/emoji/pp-view-element-emojiselectorpanelheader.js",
        "../src/view/emoji/pp-view-element-emojiicon.js",
        "../src/view/emoji/pp-view-element-emojiselectorcontent.js",
        "../src/view/emoji/emojiselector.js",
        "../src/view/service/texturlchecker.js",
        "../src/view/service/pp-view-basestyle.js",
        "../src/view/service/pp-view-settings.js",

        "../src/controller/basectrl.js",
        "../src/controller/appprofilecontainerctrl.js",
        "../src/controller/composer-container.js",
        "../src/controller/conversation-content.js",
        "../src/controller/conversation-list.js",
        "../src/controller/conversation-panel.js",
        "../src/controller/emoji-selector.js",
        "../src/controller/group-members.js",
        "../src/controller/hovercard/launcher-hovercard.js",
        "../src/controller/hovercard/launcher-hovercard-category-single.js",
        "../src/controller/launcher.js",
        "../src/controller/pulltorefresh.js",
        "../src/controller/sheetheaderctrl.js",
        "../src/controller/uploadingbar.js",

        "../src/modal/conversationcontent-modal.js",
        "../src/modal/conversationcontent-group.js",

        "../src/main/fn/ppmessage-func-end.js",

        // MODULE PP
        "../src/main/pp/pp-module.js",

        // MODULE JQuery
        "../src/main/jquery/jquery-module-begin.js",
        "../../resource/share/ppcom/bower_components/jquery/dist/jquery.js",
        "../src/main/jquery/jquery-module-end.js",

        // RUN
        "../src/main/run.js",        
        "../src/main/end.js"
    ],

    cssFiles: [
        "../src/css/global.css",
        "../src/css/pp-main.css",
        "../src/css/group-member-hovercard.css",
        "../src/css/group-members.css",
        "../src/css/msgs/common.css",
        "../src/css/msgs/emojibyuser.css",
        "../src/css/msgs/textbyuser.css",
        "../src/css/msgs/audiobyadmin.css",

        // PUT media css to the end
        "../src/css/media.css"
    ]
};

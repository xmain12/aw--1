FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/xmain12/aw--1 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://github.com/Kaweeshachamodk/xmain
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated
CMD ["node", "bot.js"]

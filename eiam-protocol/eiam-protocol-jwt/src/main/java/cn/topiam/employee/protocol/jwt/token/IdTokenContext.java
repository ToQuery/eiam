/*
 * eiam-protocol-jwt - Employee Identity and Access Management
 * Copyright © 2022-Present Jinan Yuanchuang Network Technology Co., Ltd. (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package cn.topiam.employee.protocol.jwt.token;

import java.time.Duration;

import lombok.Builder;
import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

/**
 *
 * @author TopIAM
 * Created by support@topiam.cn on 2023/7/10 22:43
 */
@Data
@Builder
@RequiredArgsConstructor
public class IdTokenContext {

    @NonNull
    private String   issuer;

    @NonNull
    private String   subject;

    @NonNull
    private String   audience;

    @NonNull
    private String   sessionId;

    /**
     * Token 过期时间（秒）
     */
    @NonNull
    private Duration idTokenTimeToLive;

    @NonNull
    private String   privateKey;
}
